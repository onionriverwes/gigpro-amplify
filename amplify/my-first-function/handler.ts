import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const handler = async (event: any) => {
  const sourceBucket = 'source-bucket-name';
  const destinationBucket = 'destination-bucket-name';
  const fileName = 'template-file.txt';

  try {
    // Get the template file from S3
    const templateFile = await s3.getObject({
      Bucket: sourceBucket,
      Key: fileName,
    }).promise();

    let fileContent = templateFile.Body.toString('utf-8');

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
    await s3.putObject({
      Bucket: destinationBucket,
      Key: fileName,
      Body: fileContent,
      ContentType: 'text/plain',
    }).promise();

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