1. Dealer Dashboard Shell
2. edit vehicle

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