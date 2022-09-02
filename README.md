# The-Code-Grind-Front-End
The Code Grind - All Things Front-End

heroku frontend link: https://codegrind-frontend.herokuapp.com/
heroku backend link: https://codegrind.herokuapp.com/drinks

Coffee Shop Website with Seasonal Items

Technologies Used:
We used React.js, Axios, MongoDB, Postman, Html, and more to allow our website to work. Deployment was done using Atlas for the backend API, while full app deployment was made through Heroku. 

Approach taken:
Alisi worked on the backend for the first half and Liat worked on the frontend to get a skeleton out. Then in the second half, we switched and Alisi worked on the frontend and Liat worked on the backend of things. From there, we were getting more frustrating things done and edited code and ironed out all the bugs. Near the end, Liat buttoned up the small issues we had with the backend and frontend functionality and Alisi focused on CSS towards the end to make things look nice.


Unsolved Problems: 
  Input / Edit / Delete is seemingly only functional upon the initial page load on Heroku. This seems to be an issue with Heroku deployment, and is not an issue locally. Another issue that can be solved with further styling specifications is that if you only add one item, it disturbs the styling/layout of another item. This issue disappears when you add yet another item. This is because the images are in two columns and one item will get dispursed between two columns until there is once again an even number of items. 


User Story:
  Entering the website, user is greeted by a dispaly of the coffee shop's drinks menu, with a background image of the coffee shop. Coffee shop is titled with The Code Grind. Each item has a dropdown tag which allows user to view more information regarding the item. Beneath this information, there are two more dropdown tags, which are meant for employees to be able to edit and/or delete an item. The delete dropdown gives a delete button - this allows to ensure that item isn't accidentally deleted by giving two steps in the process. Editing provides an edit form, for each property value to be edited individually. Page refreshes upon submission. In addition, there is a suggestion box for employees / users to input a new item. 


Notes to self:
  It truly was essential for us to have atlas working from the beginning - the only way for the data to appear in the atlas database is for atlas to have been up & running when we seeded the data. This project is bringing the entire ecosystem to light - the backend requires atlas to publically store the data. Heroku is the final step for communication between the frontend and the backend. So this can be misleading in that Heroku can seem like a final step, but really this makes it an INITIAL step. This is because the communication between the frontend and backend code is done by inserting the backend heroku link in the request routes written in the frontend code. Also a reminder to self, that postman truly is a helpful tool. 
  Another note to self is that it really does cause merge conflicts for both developers to be working on the same file. It would have been a more productive work flow to decide who works on which files. If we wanted to work on the same file, this would have been great to do over zoom together, and one person pushes those changes. 
  It worked well to have several check-ins a day. One in the morning, one before lunch. One after lunch, one before evening. I would suggest this in the future, too!
