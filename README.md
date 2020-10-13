# ivyhacks2020 - Micro Money

## Inspiration for Micro Money
In these unprecedented times of Covid-19, one of the biggest challenges was shortage in demand faced by small/local businesses, be it restaurants, small cafes or small brands. In fact, people who were evicted from their homes because of their inability to pay rent were also hardly hit. This is where Micro Money comes in – a micro-loan service platform that connects people in immediate need of money to tons of lenders who are willing to help people in need and extend them a small amount of loan. This is what we envision our platform to be – a place where people in need of some money can get access to it quickly, without any hassle. In fact, these people can create their own campaigns (think, crowdfunding campaigns) and even get money from multiple lenders – speeding up the process of lending and solving their problems.

## What it does
The main purpose of Micro Money is to serve as a platform for the people who were hit the hardest by the pandemic and providing them access to capital by connecting them with multiple lenders willing to offer financial help.

- Borrowers (people in need) can create campaigns through the platform describing the amount of money they need, why they need it and when they will be able to repay the amount.
- Lenders can view currently active campaigns based on where they are located and choose people they want to offer money to.
- Check whether borrowers are eligible for the loan by leveraging our Loan Eligibility Predictor, a custom made classification machine learning model trained, built, and deployed inside IBM Watson Studio.
- Create accounts for lenders and borrowers through the Capital One Hackathon API which speeds up the process of transferring money reliably and efficiently.

Once a person signs up as a borrower or a lender, an account is created for them using the Capital One Reimagine Banking Hackathon API. A borrower can instantly start filling out details for the campaign he wants to create. Based on the campaign information, a loan eligibility model is run which predicts whether the person is eligible for a loan or not. This can definitely help the lenders get some assurance that the money they are providing is being used for the right reasons and is going to genuine people. 

Once a lender chooses the person he wants to extend the money to, he can transfer the money to the borrower’s account with the click of a button. All the details of active campaigns and loans are stored in a secure, SQL database that cannot be tampered with.   

The platform has been created by keeping in mind the user experience and user-friendliness of such a service and also abstracting away the complex workflows that lie underneath the loan process.

## How we built it
- Frontend and UI of the website built using HTML, CSS and React.js.
- Backend comprises Node.js along with some APIs written in Python and Flask.
- Database built using SQLite.
- APIs leveraged – IBM Watson Studio (built classification machine learning model for Loan Eligibility Predictor) Capital One Hackathon API (Nessie).
 
## Challenges we faced
This was our first time interacting with the IBM Watson Studio- we faced significant challenges around the board. Firstly, our SPSS model's input/output schema broke, which caused us to retrain and migrate the data to a Gradient Boosting Classifier built with IBM Auto AI. The new authentication protocol implemented recently in September also caused the REST API to be a challenge. It was also difficult maneuvering around the various server side errors, such as the Dallas servers being down, as well as the Gradient Boosting Classifier's input/output schema testing interface breaking without a descriptive error. Lastly, having our monthly usage run out on our account was a problem. Although this was a big challenge, we were able to solve it by collaborating with two IBM engineers and figuring out ways to go around these issues.

Not being able to communicate in-person was quite limiting - especially when we needed to brainstorm ideas and debug issues.

## Accomplishments & What we learned
It was the 1st hackathon for most of our team and we learnt a lot from a technical perspective in such a small time frame.

Designing data models for a highly integrated, complex system like ours was no easy feat, but with a lot of collaboration and using Stack Overflow - we were able to come up with a resilient data model.
Creating a user interface that provides a seamless user experience while hiding away the complex tasks.
Exploring new APIs - both the APIs that we used in this project were new for us and it exposed us to new functionalities that will help us in the future.

IBM Watson Studio makes it easy to build machine learning models with little to no time, especially with tools like AutoAI and SPSS.

## What's next for Micro Money
Expand the user base by signing up more lenders and borrowers – hence having a thriving community of people who want to help others in need.

Add features for the borrower to connect with the lender on the platform, hence providing a more human and realistic touch to the entire loan process.

Make the system more secure since we are dealing with exchange of money on this platform.
Ensure that the micro loans being extended are being used for genuine purposes – integrate platforms like Postman, Bill/Rent payment facilities so that lenders can transfer money directly to these services on behalf of the borrowers.


### (Internal Team Planning Sources)
-**planning doc:** https://docs.google.com/document/d/1FCvegGRqzIsDRWj9KI0lnT8ehy3INxeOXzpVD2gW4_4/edit

-**attributes sheet:** https://docs.google.com/spreadsheets/d/1LedJitDBMN9XlkRPpElxsvryFspzut4DHo-mrgriw3k/edit#gid=1146662055

-**IBM loan eligibility tutorial:** https://developer.ibm.com/technologies/data-science/tutorials/predict-loan-eligibility-using-jupyter-notebook-ibm-spss-modeler/

-**IvyHacks guide:** https://www.notion.so/Hacker-s-Guide-to-IvyHacks-9609579c8b9046569f7b1a74b2ec0d63

-**Event calendar:** https://teamup.com/ksc7vpr5jnvhumw43p
