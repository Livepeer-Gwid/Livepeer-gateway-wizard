#!/bin/bash

# Initialize Terraform
terraform init -input =false

# Apply the Terraform configuration
terraform apply -auto-approve