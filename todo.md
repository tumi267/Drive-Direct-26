1. Dealer Dashboard Shell
2. edit vehicle



vehicle page make limit: 10, a secetion 
[BUG]
Investigate onboarding hydration mismatch

Error:
Expected server HTML to contain a matching <form> in <p>

Occurs:
- First signup only
- Dealer/User onboarding flow

Likely causes:
- Parent component rendering <DealerForm /> inside <p>
- Loading state mismatch between SSR and client hydration
- Clerk loading state changing initial markup

[image]
1. Better drag-and-drop
2. Replace image
3. Cover image
4. Progress bars
5. Image compression
6. Fancy animations




Priority Listings
PayFast integration
Purchase flow
Listing priority logic
Dealer Membership
Free first month
Subscription flow
Dealer onboarding revisit
User Dashboard
Profile
Favourites
Enquiries
Admin Dashboard
Sales monitoring
Commission tracking
Sold vehicles
Revenue overview
Dealer management