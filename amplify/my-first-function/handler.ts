import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const handler = async (event: any) => {
  const sourceBucket = 'source-bucket-name';
  const destinationBucket = 'destination-bucket-name';
  const fileName = 'template-file.txt';

  try {
    // Get the template file from S3
    const templateFile = await Storage.get(fileName, { bucket: sourceBucket, download: true });
    let fileContent = templateFile.Body.toString('utf-8');

    // get gig info from ampily db
    /* const gig = await API.graphql({
        query: queries.getGig,
        variables: { id: '123' },
    }); */

    // Replace variables in the template file
    const variables = {
      '{{variable1}}': 'value1',
      '{{variable2}}': 'value2',
      '{{variable3}}': 'value3',
    };

    for (const [key, value] of Object.entries(variables)) {
      fileContent = fileContent.replace(new RegExp(key, 'g'), value);
    }

    // Upload the new file to the destination bucket
    await Storage.put(fileName, fileContent, {
      bucket: destinationBucket,
      contentType: 'text/plain',
    });

    return {
      statusCode: 200,
      body: JSON.stringify('File processed and uploaded successfully!'),
    };
  } catch (error) {
    console.error('Error processing file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify('Error processing file'),
    };
  }
};