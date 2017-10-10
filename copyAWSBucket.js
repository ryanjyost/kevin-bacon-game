// Load the SDK
const AWS = require('aws-sdk');

// Create an S3 client
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccesKey: process.env.AWS_S3_SECRET_ACCESS_KEY
});

//change this based on file you want to copy, run once for each file      
const fileName = 'name.basics';

const srcBucketName = 'imdb-datasets',
    srcKey = `documents/v1/current/${fileName}.tsv.gz`, 
    desBucketName = 'imdb-data-files',
    desKey = `${fileName}.tsv.gz`;


const params = {
  Bucket: desBucketName,
  CopySource: `${srcBucketName}/${srcKey}`,
  Key: desKey,
  RequestPayer: 'requester' //required by IMDb
};

s3.copyObject(params, (err, data) => {
  if(err) console.log(err)
  else{
    console.log(data);
  }
});
