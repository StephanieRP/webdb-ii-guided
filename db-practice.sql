Insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country) Values('Awesome Devs', 'Stephanie Patton', '1 South Apple Street', 'New York', 1123, 'USA') -- add a new value

select * from Customers Order By 1 Desc -- will show the latest data, good to see recently added data. 

-- update records, be sure to check that you are targeting the correct data 
--Select * From Customers <-- put this first then comment out 
Update Customers Set Country = 'United States of America'
Where CustomerID = 92

--delete records 
delete from customers
where customerId = 92