#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "autocomplete.h"


void read_in_terms(struct term **terms, int *pnterms, char *filename) {
    char line[200];
    FILE *fp = fopen(filename, "r");

    // stores the number of lines (the first row of the document) as a variable
    char number_of_lines[10];
    fgets(number_of_lines, sizeof(number_of_lines), fp);

    // converts number of lines into an int
    *pnterms = atoi(number_of_lines);
    printf("%d\n\n\n", *pnterms);

    *terms = (struct term *)malloc(sizeof(struct term) * (*pnterms));

    for(int i = 0; i < *pnterms; i++){

        fgets(line, sizeof(line), fp);
        (*terms + i)->weight = get_weight(line);
                
        //(*terms + (i * sizeof(struct term)))->term = (char *)malloc(sizeof(line));
        char *new_term = (char *)malloc(sizeof(char) * 200);
        get_term(line, new_term);
        strcpy(((*terms + i)->term), new_term);
        free(new_term);
        printf("%s\n",(*terms + i)->term);
        printf("%f\n\n", (*terms + i)->weight);
        // if (i == 16) {
        //     break;
        // }
    }
}

// int lowest_match(struct term *terms, int nterms, char *substr) {
//     // Given the pointer to the first term, the number of terms and a substring, returns the index
//     // of the term that matches the string substring

//     // The terms are already in lexicographic ordering
//     int len = sizeof(substr)/sizeof(char);
//     int start = 0;
//     int end = nterms/2;

//     while (1) {
//         if ((get_term_by_ind(terms, nterms, (start + end)/2))->term - substr <= 0) {
//             start = (start + end)/2;
//         }

//         else {
//             end = (start + end)/2 -1;
//         }
//         if (get_term_by_ind(terms, nterms, start) == substr

//         break;
//     }
// }

struct term *get_term_by_ind(struct term *terms, int nterms, int ind) {
    if (ind >= nterms || ind < 0) {
        return NULL;
    }
    else {
        return terms + ind * (sizeof(struct term));
    }

}


double get_weight(char *line) {
    while (*line == ' ') {
        line++;
    }
    char *copy_string = ' ';
    int i = 0;
    
    while ((*line != ' ') && (*line != '\t')) {
        
        copy_string[i] = *line;
        i++;

        line++;
    }
    return atof(copy_string);

}


void *get_term(char *line, char *dest) {
    
    while (*line == ' ') {
        line++;
    }
    while ((*line <= '9') && (*line >= '0')) {
        line++;
    }
    while ((*line == '\t') || (*line == ' ')) {
        line++;
    }
    int i = 0;
    while (*line != '\n') {
        dest[i] = *line;
        i++;
        line++;
    }
}




char *my_strcat(char *dest, char *src) {
    char *dest_p = dest;
    while (*dest != '\0') {
        dest++;
    }
    while (*src != '\0') {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\0';
    return dest_p;
}



// pointer++ moves it to the next one automatically detecting what the size of the value is that it's pointing to