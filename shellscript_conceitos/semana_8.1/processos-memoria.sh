#!/bin/bash

processos=$(ps -e -o pid --sort -size | head -n 11 | grep [0-9])

$(ps -p 14009 -o comm=)