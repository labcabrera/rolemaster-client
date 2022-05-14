#!/bin/bash

ng build

docker build -t labcabrera/rolemaster-client .

docker push labcabrera/rolemaster-client