resource "aws_vpc" "express_network" {
  cidr_block            = "172.0.0.0/16"

  enable_dns_hostnames  = true
  enable_dns_support    = true

  tags = {
    Name = "express_network"
  }
}

resource "aws_subnet" "express_network_a" {

  vpc_id                  = aws_vpc.express_network.id
  cidr_block              = "172.0.1.0/24"
  availability_zone       = var.express_zona_a
  map_public_ip_on_launch = true

  tags = {
    Name = "networking-a"
  }

}


resource "aws_route_table_association" "express_network_route" {
  subnet_id      = aws_subnet.express_network_a.id
  route_table_id = aws_route_table.express_rt.id
}


resource "aws_internet_gateway" "express_ig" {
  vpc_id = aws_vpc.express_network.id

  tags = {
    Name = "express-igw"
  }

}

resource "aws_route_table" "express_rt" {
  vpc_id = aws_vpc.express_network.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.express_ig.id
  }

  tags = {
    Name = "express_route_tables"
  }

}