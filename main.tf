terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
  access_key = ""
  secret_key = ""
}

variable "arb_rpc_url" {
  description = "Provide your ARB RPC URL"
  type        = string
}

variable "public_ip" {
  description = ""
  default = "aws_instance.ubuntu.public_ip"
  type        = string
}

variable "passphrase" {
  description = "Input Your Etherum Gateway Password"
  type        = string
  sensitive = true
}

resource "aws_key_pair" "key" {
  key_name   = "GWID-key"
  public_key = file("./data/ssh_keys/terraform.pub") 
}

resource "aws_security_group" "instance" {
  name        = "GWID-allow_ssh"
  description = "Allow SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "LiVEPEER_GWID_POC_SERVER" {
  ami           = "ami-0e86e20dae9224db8" # Ubuntu AMI
  instance_type = "t2.micro"
  key_name      = aws_key_pair.key.key_name
  security_groups = [aws_security_group.instance.name]

  user_data = templatefile("livepeer_config.tpl",{
    rpc_url = var.arb_rpc_url,
    public_ip = var.public_ip
    passphrase = var.passphrase
  })

  tags = {
    Name = "GWIDEC2"
  }
}

output "Server_IP" {
  value = aws_instance.LiVEPEER_GWID_POC_SERVER.public_ip
}
