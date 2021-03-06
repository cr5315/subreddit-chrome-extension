/**
    Copyright 2014 Benjamin Butzow

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
**/

function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
        description: 'Enter subreddit /r/%s'
    });
}
resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) { 
    // Nothing to see here 
});

chrome.omnibox.onInputCancelled.addListener(function() {
    resetDefaultSuggestion();
});

function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: url});
    });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
    navigate("http://reddit.com/r/" + text);
});