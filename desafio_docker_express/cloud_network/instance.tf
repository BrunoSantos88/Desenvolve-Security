resource "aws_instance" "express_server" {
  ami                         = var.express_ami
  instance_type               = "t2.micro"            
  availability_zone           = var.express_zona_a 
  subnet_id                   = aws_subnet.express_network_a.id
  associate_public_ip_address = true    

  user_data = file("gitrunner.sh")                    

  vpc_security_group_ids = [
     aws_security_group.express-firewall.id
  ]
}