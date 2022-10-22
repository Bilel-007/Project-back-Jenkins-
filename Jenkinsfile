pipeline {
    environment {
                scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                }
    agent any
    stages {
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                        
                    sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=Project-Devops-back \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9000 \
                                -Dsonar.login=c8b2c764943238488fb46caf357927b330c86cbf"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
     }
}
