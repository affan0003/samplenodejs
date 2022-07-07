pipeline {
    
	agent any
/*	
	tools {
        maven "maven3"
    } 
*/
	environment {
        passwd = credentials("admin")
    }
	
	
	stages{

	    stage('pwd'){
               steps {
                   sh 'pwd'
               }
           }
		
	    stage('ssh in machine'){
               steps {
		       sh("sudo sshpass -p ${passwd} ssh admin@100.24.120.210")
               }
           }

}

}
