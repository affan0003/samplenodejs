pipeline {
    
	agent any
/*	
	tools {
        maven "maven3"
    }
*/	
	stages{

	    stage('pwd'){
               steps {
                   sh 'pwd'
               }
           }
		
	    stage('ssh in machine'){
               steps {
                   sh ' sudo sshpass -p "admin" ssh admin@100.24.120.210 '
               }
           }

}

}
