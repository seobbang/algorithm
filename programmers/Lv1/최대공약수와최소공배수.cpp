#include <string>
#include <vector>

using namespace std;

vector<int> solution(int n, int m) {
    vector<int> answer;
    int mul = n*m;
    int G;
        
    for(int i = (n < m) ? n : m; i > 0; i--) {
        if(n%i == 0 && m%i == 0) {
            G = i;
            break;
        }
    }
    
    answer.push_back(G);
    answer.push_back(mul/G);
    
    return answer;
}