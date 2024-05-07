provider "aws" {
  region = "us-east-1"
  version = "~> 3.0"
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "expresss_key_bucket_desenvolve"
  acl    = "private"
}