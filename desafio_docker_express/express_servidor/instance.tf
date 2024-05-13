resource "aws_instance" "express_server" {
  ami                         = var.express_ami
  instance_type               = "t2.micro"            
  availability_zone           = var.express_zona_a 
  disable_api_termination     = true
  subnet_id                   = var.express_subnet
  associate_public_ip_address = true                        
  

  #### SCRIPT APACHE
  user_data = file("express_dependencia.sh")

  vpc_security_group_ids = [
    var.nsg_express
  ]
  root_block_device {
    delete_on_termination = true
    volume_size           = 10
    volume_type           = "gp2"

  }
  tags = {
    Name        = "express_server"
    Environment = "BrunoSantos"
    OS          = "Ubuntu20:04 "
    Managed     = "Desenvolve"
  }
}