resource "tls_public_key" "express_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

output "public_key" {
  value     = tls_public_key.express_key.public_key_openssh
}

resource "aws_s3_bucket" "express_key_bucket" {
  bucket = "express_key_desenvolve"  # Nome do seu bucket S3
  acl    = "private"         # Permissões de acesso ao bucket
}

resource "aws_s3_bucket_object" "public_key_object" {
  bucket       = aws_s3_bucket.express_key_bucket.bucket
  key          = "public_key.pub"
  source       = tls_public_key.express_key.public_key_openssh
  acl          = "private"    # Permissões de acesso ao objeto no S3
  content_type = "text/plain" # Tipo de conteúdo do objeto
}