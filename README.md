## Application for finding the current status of the location of the parcel by the invoice number and obtaining a list of Nova Poshta branches

The following technologies and libraries were used during creation:
- JavaScript
- TypeScript
- React
- React Router
- Redux ToolKit
- Material UI

---
#### [DEMO LINK](https://volodymir-tymtsias.github.io/test_same-it/)

#### Functionality of the application:
- The user enters the tracking number in the input field on the main page. After that, the application sends a request to receive data about the current status of the parcel's delivery location.
- According to the received data, the application displays information about sending to the user.
- The user has the opportunity to see all previous tracking numbers in the form of a history list. Even after reloading the page.
- By clicking on the tracking number in the search history, the application automatically performs a request for the status of finding
delivery and displays the relevant information. In this case, the tracking number is automatically displayed in the input field.
- The tracking number of the invoice is checked for correctness when entering. If the format is incorrect, after clicking the button to get the delivery status of the tracking number, a prompt will be displayed and the request will not be sent.
- It is possible to clear all old tracking numbers from the history or delete an individual tracking number.
- By switching to the second tab, the user has the opportunity to see the list of New Post offices obtained by means of a request from the NP server, divided into pages for ease of viewing, with the option of choosing the number of items on the page.
- The user can also get a list of branches in the desired locality by entering the name of the locality in the search form on the corresponding page.