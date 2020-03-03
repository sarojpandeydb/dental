var apiUrl = window.tfl.url;
var src = apiUrl + '/Widgets/JourneyPlanner?to=' + window.tfl.to;
var iframe = '<iframe title="TfL journey planner widget" scrolling="no" style="border:none;" width="250" height="330" src="'+src+'"></iframe>';
document.write(iframe);
