#include<bits/stdc++.h>
using namespace std;
#define ll long long int
#define   endl  "\n"
#define   mod             1000000007
#define   operation();    ios_base:: sync_with_stdio(0);cin.tie(0);cout.tie(0)
#define   pb              push_back
#define   ff              first
#define   ss              second
#define test int t; cin>>t; while(t--)
int gcd(int a,int b)
{
if(b==0)
return a;
return gcd(b,a%b);
}

void solve() {

	int n;
	cin >> n;
	string s;
	cin >> s;
	
	int res = 0;
  int ans;
	for (int i = 0; i < n - 1; ++i) {
		int cur = 0;
		for (int j = 0; j < n - 1; ++j)
			if (s[j] == s[i] && s[j + 1] == s[i + 1])
				++cur;
		if (res < cur) {
			res = cur;
			ans = i;
		}
	}
	
  cout<<s[ans]<<s[ans+1] << endl;
	
}
int main()
{
operation();
solve();

}