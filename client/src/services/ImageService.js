const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function getImageSrc(imageName) {
  const params = {
    Bucket: 'bookshelf-store', // Replace with your bucket name
    Key: `covers/${imageName}`, // Construct the key with "covers" folder prefix
  };

  try {
    console.log(`Attempting to fetch image: ${params.Key}`);
    const getObjectCommand = new GetObjectCommand(params);
    const headObjectResponse = await s3Client.send(getObjectCommand);

    // Check if the object exists before returning the URL
    if (headObjectResponse.Body) {
      const signedUrl = await s3Client.getSignedUrl('getObject', params);
      console.log(`Signed URL generated: ${signedUrl}`);
      return signedUrl;
    } else {
      console.log(`Image not found: ${params.Key}`);
      throw new Error('Image not found');
    }
  } catch (error) {
    console.error('Error getting image URL:', error);
    throw error; // Re-throw for handling in the Express route
  }
}

module.exports = { getImageSrc };
