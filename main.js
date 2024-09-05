var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var projectForm = document.getElementById('project-form');
var projectNameInput = document.getElementById('project-name');
var projectDescriptionInput = document.getElementById('project-description');
var projectList = document.getElementById('project-list');

var fetchProjects = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 , fetch("http://localhost:6969/json", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })];
            case 1:
                response = _a.sent();
                return [4 , response.json()];
            case 2:
                result = _a.sent();
           
                projectList.innerHTML = '';
               
                result.allprojects.forEach(function (project) {
                    appendProjectToList(project.Title, project.Description);
                });
                return [2 ];
        }
    });
}); };

projectForm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var projectName, projectDescription;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                projectName = projectNameInput.value;
                projectDescription = projectDescriptionInput.value;
            
                return [4 , fetch("http://localhost:6969/create-project", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            Title: projectName,
                            Description: projectDescription,
                        }),
                    })];
            case 1:
             
                _a.sent();
              
                fetchProjects();
            
                projectForm.reset();
                return [2 ];
        }
    });
}); });

function appendProjectToList(projectName, projectDescription) {
    var article = document.createElement('article');
    article.innerHTML = "\n        <h3>".concat(projectName, "</h3>\n        <p>").concat(projectDescription, "</p>\n    ");
    projectList.appendChild(article);
}

fetchProjects();
