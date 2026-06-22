1. Dealer Dashboard Shell
2. Vehicle Create Page
3. Vehicle Create API
4. Vehicle CRUD
5. Dealer Listings Page

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