#include <stdio.h>
#include <stdlib.h>

char* Input(char *buffer){
    unsigned int size = 10;
    unsigned int len = 0;
    int ch;
    
    buffer = malloc(sizeof(char)*size);
    if(!buffer){
        printf("Error allocating memory");
        return buffer;
    }
    while((ch = fgetc(stdin)) != EOF && ch != '\n'){
        buffer[len] = ch;
        if(len == size-1){
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
    buffer = realloc(buffer,sizeof(buffer));
    return buffer;
}
