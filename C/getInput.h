#include <stdio.h>
#include <stdlib.h>

char* getInput(char *buffer){
    unsigned int size = 10;
    unsigned int len = 0;
    int ch;
    
    buffer = malloc(sizeof(char)*size);
    
    while((ch = fgetc(stdin)) != EOF && ch != '\n'){
        buffer[len] = ch;
        if(len == size){
            size = size << 4;
            buffer = realloc(buffer,sizeof(char)*size);
            if(!buffer){
                printf("Error reallocating memory");
                return buffer;
            }
        }
        len++;
    }
    buffer[len] = '\0';
    return buffer;
}
