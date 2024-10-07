echo "Hello from command.sh"



: << 'END_COMMENT'


NOTE : - 
./filename : To run the file in bash 
ls -l => for see all file permissions 

------------------------------------------------

# Removing permission of a file 
chmod u-rwx, g-rwx , o-rwx filename 
Here u - User , g - Group , o - Others 

# Adding Permissions to a File 
chmod u+rwx, g+rwx , o+rwx filename 
Here u - User , g - Group , o - Others 

------------------------------------------

Read  => r  => 4  (represent in number)
Write  => w  => 2
Execute  => x  => 1

END_COMMENT