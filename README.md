# <a href="https://github.com/choonleong/choonleong.github.io">Trace My Family Member</a>

The brief for this assignment was to build a web application where an interactive map is the centerpiece. Markers and map layers are used to provide useful information to the user. The user must be able to interact with the map in meaningful ways, such as clicking on markers to activate a process or being able to manipulate the map display with HTML form elements.

This project is built according to the following concept:

- The company M/s TMFM (Trace My Family Member) offers the subscribed user to trace their loved one/family member if they go missing
- The loved one is defined as a family member with special needs, such as dementia or with other cognitive impairment
- A tracker has been physically tagged to the family member, 24 hours a day (ethics of such method(s) should be discusssed separately)
- User may wish to send a help message to all available taxis within 500m of the tracker.

The goal of this web application is for the subscribed user to locate their family member's whereabout and provide assistance asap.

# UX

The user is presented with a map which indicates their own location, and location markers of all available taxis in Singapore:

- The user is an icon marked as a male with spectacles.
- The taxi is an icon marked as a yellow taxi

A message form is provided for user's input:

- Pink font is chosen for quick reading of important information and actionable button

A dark grey background has been adopted for easier reading.

Contact form and buttons are rearranged at 600px width to better fit mobile devices.

# User Stories and Features

This web application is targeted towards users who wish to employ another safeguard in keeping tabs on their family member. Nursing homes, daycare or even hospitals may be effective in providing physical close guardianship, but some users may wish to companion their family member at home and they would be prone to attention lapses.

The user subscribes to M/s TMFM for their service and after an authentication login process, they are presented with the map interface and its features.

<br/>
<i><h2 class="projectLiner">This project starts here and implements the necessary features after the company's login page.</h2></i>
<br/></br>

| User Story                                                        | Feature                                                      | Test Steps                                                                                     | Expected Result                                                                                                                            | Future Improvements                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Where is my current location?                                     | Display user's location                                      | Allow web browser to track user's location                                                     | User icon shows up on map and browser updates user's location every 15 secs                                                                | Nil                                                                                                                                                                                                                                                                         |
| Where is my family member's location?                             | Display family member's location                             | In lieu of a tracker's input, user to mouse-click a random location on the map                 | Help icon shows up on map<br/><br/> Provides popup "I Need Help!"                                                                          | The display of longitude and latitude coordinates are intended to pinpoint the family member's location so that it can be relayed to an external party if necessary. <br/><br/>However coordinates mean nothing to laymen. Will need to convert coordinates to postal code. |
| How do I reach my family member?                                  | Provide a route from user to family member                   | After clicking on mapt to indicate the member's location, a route is displayed with directions | Route is displayed with directional instructions<br/><br/>Allow about 3-5 secs to process                                                  | Another click will add a second marker and map will iterate its route. Need to disable such additions and allow 1 click/route to be displayed at all times. <br/><br/> In the meantime, to choose a different location, click on the "Refresh Page" to restart everything   |
| The map is too dark / too bright                                  | Toggle a map interface between "Google Street" and "One Map" | Click on the radio button, located on top-right of screen                                      | A different map interface is adopted after its respective toggle                                                                           | Nil                                                                                                                                                                                                                                                                         |
| I wish to see/hide Taxi markers                                   | Adds/removes taxi markers from the map                       | Check/uncheck the "Taxi Markers" option, located on top-right of screen                        | Checking and unchecking the option corresponds in adding and removing the taxi markers respectively                                        | The Taxi API is set to refresh every 30 secs. The taxi markers are enabled again during the refresh even if they are unchecked by user. <br/><br/>Need to keep the markers off the map when Taxi API refreshes                                                              |
| I wish to enlarge the screen                                      | Displays full screen                                         | Click on the "Click for Full Screen Mode" button                                               | Expands to full screen on user's device<br/><br/>Press "Esc" to exit full screen"                                                          | Nil                                                                                                                                                                                                                                                                         |
| I wish to refresh the page faster, as-and-when, in fact right now | Refresh user's location<br/><br/>Refresh taxi locations      | Click on the "Refresh Page" button                                                             | Refreshes all functions immediately<br/><br/>Taxi API refreshes at 30 sec intervals<br/><br/>User's location refreshes at 15 sec intervals | Nil                                                                                                                                                                                                                                                                         |
| I wish to seek help from taxis near family member                 | Reach out to taxis within 500m radius of family member       | Click on "Send" button                                                                         | Displays an alert of "Message Sent!"<br/><br/>Refreshes page<br/><br/>Clicking on taxi icon displays "I'm a taxi"                          | Need to capture form's input<br/><br/>Need to validate nil input for the text fields<br><br>Provide an input to modify radius                                                                                                                                               |

# Technology Used

<a href="https://devdocs.io/html/"><b>HTML</b></a>

- This project uses HTML to provide the page's content

<a href="https://devdocs.io/css/"><b>CSS</b></a>

- This project uses CSS to provide the page's style
- A majority of the project's timeline was dedicated to implementing features and solving bugs. It is regretable that Bootstrap and Tailwind CSS were omitted due to insufficient time to learn/discern each individual style and their quirks. Will be glad to refactor into Tailwind in the near future.

<a href="https://devdocs.io/javascript/"><b>Javascript</b></a>

- This project uses Javascript to incorporate APIs and add features such as markers and infomation windows.

<a href="https://api.jquery.com/"><b>Jquery</b></a>

- This project uses Jquery for DOM manipulation.

# Deployment - Live Link

This project has been deployed to <a href="choonleong.github.io"><b>Github</b></a>.

# Credits

<a href="https://data.gov.sg/"><b>Data.gov.sg</b></a>

- Data for the taxi markers were fetched from data.gov.sg

<a href="https://leafletjs.com/"><b>Leaflet</b></a>

- The map is only made possible with Leaflet and their documentation

<a href="https://www.flaticon.com/"><b>Icons</b></a>

- The icons used were downloaded from Flaticon

Google / One Map / Open Map Tiles

- The map layers are linked from the above-named websites
