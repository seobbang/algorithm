#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> changeToBinary (int num, int size) {
    vector<int> result;
    
    while(num >= 1) {
        result.push_back(num%2);
        num /= 2;
    }
    
    while(result.size() < size) {
        result.push_back(0);
    }
    
    return result;
}

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    vector<vector<int>> arr1map(n, vector<int>(n,0));
    vector<vector<int>> arr2map(n, vector<int>(n,0));
    
    for (int i=0; i<n; i++){
        vector<int> arr = changeToBinary(arr1[i], n);
        for(int j=0; j<n; j++){
            arr1map[i][j] = arr[n-j-1];
        }
    }
    for (int i=0; i<n; i++){
        vector<int> arr = changeToBinary(arr2[i], n);
        for(int j=0; j<n; j++){
            arr2map[i][j] = arr[n-j-1];
        }
    }
    for(int i = 0; i < n; i++){
        string s = "";
        for(int j = 0; j < n; j++){
            if(arr1map[i][j] == 0 && arr2map[i][j] ==0) {
                s += " ";
            }else {
                s += "#";
            }
        }
        answer.push_back(s);
    }
    return answer;
}