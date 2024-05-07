resource "tls_private_key" "express_key" {
  algorithm         = "RSA"
  rsa_bits          = 2048
}

resource "tls_public_key" "express_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
  private_key_pem = tls_private_key.express_key.private_key_pem
}

resource "aws_s3_bucket" "express_key" {
  bucket = "express_key"  # Nome do seu bucket S3
  acl    = "private"         # Permissões de acesso ao bucket
}

resource "aws_s3_bucket_object" "private_key_object" {
  bucket       = aws_s3_bucket.express_key.bucket
  key          = "express.pem"
  source       = tls_private_key.express_ec2.private_key_pem
  acl          = "private"  # Permissões de acesso ao objeto no S3
  content_type = "text/plain"  # Tipo de conteúdo do objeto
}