resource "aws_security_group" "app_express" {
  name   = "app_express_security"
  vpc_id = aws_vpc.app_express.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }

  ###SSH#

  ingress {
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "app_express"
    Environment = "desenvolve"
    INFRA       = "acesso_app_express"
    Managed     = "desafio_2"
  }
}