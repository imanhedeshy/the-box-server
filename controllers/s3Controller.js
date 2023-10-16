// controllers/s3Controller.js

const AWS = require('../config/aws');
const s3 = new AWS.S3();

exports.generatePresignedUrl = async (bucket, key) => {
  const params = { Bucket: bucket, Key: key, Expires: 60 };
  return s3.getSignedUrlPromise('putObject', params);
};
