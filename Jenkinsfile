pipeline {
    
	agent any
/*	
	tools {
        maven "maven3"
    } 
*/
	environment {
        passwd = "admin"
    }
	
	
	stages{

	    stage('pwd'){
               steps {
                   sh 'pwd'
               }
           }
		
	    stage('ssh in machine'){
               steps {
                   sh ' sudo sshpass -p ${env.passwd} ssh admin@100.24.120.210 '
               }
           }

}

}
