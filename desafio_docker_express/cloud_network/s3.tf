resource "aws_s3_bucket" "express_key" {
  bucket = "express-bucket-desafio2"
}

resource "aws_s3_bucket_acl" "express_key_acl" {
  bucket = aws_s3_bucket.express_key.bucket
  acl    = "private"
}
