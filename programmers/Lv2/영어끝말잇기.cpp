#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(int n, vector<string> words) {
    vector<int> answer;
    int round = 0;
    int turn = 0;
    
    for(int i=0; i < words.size(); i++) {
        if(i % n == 0) round++;
        
        // 한 글자 단어인 경우
        if(words[i].length() == 1) {
            turn = i % n + 1;
            break;
        }
        
        // 0번째는 통과
        if(i == 0) continue;
        
        // 끝말이 이어지지 않은 경우
        if(words[i].front() != words[i-1].back()) {
            turn = i % n + 1;
            break;
        }
        
        // 이전에 등장했던 단어인 경우
        for(int j = i-1; j >=0; j--){
            if(words[j] == words[i]) {
                turn = i % n + 1;
                break;
            }
        }
        
        if(turn != 0) break;
    }

    if(turn == 0) round = 0;
    
    answer.push_back(turn);
    answer.push_back(round);    
    
    return answer;
}