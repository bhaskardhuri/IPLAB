//app.js

var app = angular.module("xmlApp", []);

app.controller("StudentController", function ($scope, $http) {

    // Array to store students
    $scope.students = [];

    // Object for new student
    $scope.newStudent = {};

    // Message
    $scope.message = "";


    // GET Method
    $scope.getStudents = function () {

        $http.get("data.xml")
            .then(function (response) {

                // Get XML document
                var xml = response.data;

                // Find all student elements
                var studentNodes = xml.getElementsByTagName("student");

                $scope.students = [];

                // Convert XML data into JavaScript objects
                for (var i = 0; i < studentNodes.length; i++) {

                    var student = studentNodes[i];

                    $scope.students.push({

                        id: student.getElementsByTagName("id")[0].textContent,

                        name: student.getElementsByTagName("name")[0].textContent,

                        branch: student.getElementsByTagName("branch")[0].textContent,

                        marks: student.getElementsByTagName("marks")[0].textContent

                    });
                }

                $scope.message = "Student data loaded successfully.";

            })
            .catch(function (error) {

                console.log(error);

                $scope.message = "Error while loading XML data.";

            });

    };


    // POST Method
    $scope.addStudent = function () {

        $http.post("/addStudent", $scope.newStudent)
            .then(function (response) {

                $scope.message = response.data.message;

                // Clear form
                $scope.newStudent = {};

            })
            .catch(function (error) {

                console.log(error);

                $scope.message = "Error while sending student data.";

            });

    };

});