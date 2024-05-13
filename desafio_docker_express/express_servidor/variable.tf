variable "express_zona_a" {
default = "us-east-1a"
#avability zone
}

variable "express_region" {
default = "us-east-1"  
# Region 
}


variable "express_ami" { 
  default = "ami-04b70fa74e45c3917"
  #ubuntu 20:04
}

variable "express_subnet" {
  default = "	subnet-03245e75013f520cd"
}

variable "nsg_express" {
  default = "sg-05dd5a426b6b7fc9c"
}