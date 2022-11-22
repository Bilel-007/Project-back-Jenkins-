pipeline {
    environment {
                imagename = "bilel707/projectback"
                scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                registryCredential = 'Docker_hub'
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
        stage('Install dependecies') {
            steps {
                sh 'npm install'
            }
        }
        
        
        stage("docker-build"){
            steps{
                script {
                    dockerImage = docker.build imagename   
                }
            }
        }
        
        
        stage("docker-deploy-img"){
            steps{
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push('latest')
                    }
                }
            }
        }
        
        
        

        stage('deploy to k8s') { 
            steps {
                script{
                    kubernetesDeploy (configs: ['mongo-secret.yaml','mongo.yaml','mongo-configmap.yaml','mongo-volume.yaml','backend.yaml'], kubeConfig: [path: './kubernetes'], kubeconfigId: 'k8s')
                }
            }
        }
     }
}
