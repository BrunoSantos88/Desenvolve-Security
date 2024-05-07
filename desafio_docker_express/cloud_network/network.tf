resource "aws_vpc" "app_express" {
    cidr_block = "192.168.0.0/16"
    enable_dns_support = true            
    enable_dns_hostnames = true           
    
tags = {
    Name        = "desenvolve"
    Environment = "docker_express"
    INFRA          = "express"
    Managed     = "terraform"
  }
}

resource "aws_subnet" "subnet-PRODUÇAO_A" {
    vpc_id = "${aws_vpc.app_express.id}"
    cidr_block = "192.168.0.1/24"
    map_public_ip_on_launch = "true"            
    availability_zone = "secrets.AWS_REGION"
}


resource "aws_internet_gateway" "app_express" {
    vpc_id = "${aws_vpc.app_express.id}"
}

resource "aws_route_table" "ROUTE_DEFAULT_ABC" {
    vpc_id = "${aws_vpc.app_express.id}"
    
    route { 
        cidr_block = "0.0.0.0/0" 
        gateway_id = "${aws_internet_gateway.app_express.id}" 
    }
  }

resource "aws_route_table_association" "app_express"{
    subnet_id = "${aws_subnet.app_express.id}"
    route_table_id = "${aws_route_table.app_express.id}"
}
