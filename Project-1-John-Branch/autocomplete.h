#if !defined(AUTOCOMPLETE_H)
#define AUTOCOMPLETE_H

struct term{
    char term[200]; // assume terms are not longer than 200
    double weight;
};


void read_in_terms(struct term **terms, int *pnterms, char *filename);
int lowest_match(struct term *terms, int nterms, char *substr);
int highest_match(struct term *terms, int nterms, char *substr);
void autocomplete(struct term **answer, int *n_answer, struct term *terms, int nterms, char *substr);
void *get_term(char *line, char *dest);
double get_weight(char *line);
char *my_strcat(char *dest, char *src);
struct term *get_term_by_ind(struct term *terms, int nterms, int ind);


#endif