# Trace My Family Member

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

A dark grey background has been adopted for easier reading.

A message form is provided for user's input:

- Pink font is chosen for quick reading of important information and actionable button

# User Stories

This web application is targeted towards users who wish to employ another safeguard in keeping tabs on their family member. Nursing homes, daycare or even hospitals may be effective in providing physical close guardianship, but some users may wish to companion their family member at home and they would be prone to attention lapses.

| User Story                            | Feature                          | Test Steps                                                                     | Expected Result                                                             | Future Improvements                                                                                                                                                                                                                                                         |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Where is my current location?         | Display user's location          | Allow web browser to track user's location                                     | User icon shows up on map and browser updates user's location every 15 secs | Nil                                                                                                                                                                                                                                                                         |
| Where is my family member's location? | Display family member's location | In lieu of a tracker's input, user to mouse-click a random location on the map | Help icon shows up on map<br /> Provides popup "I Need Help!"               | The display of longitude and latitude coordinates are intended to pinpoint the family member's location so that it can be relayed to an external party if necessary. <br/><br/>However coordinates mean nothing to laymen. Will need to convert coordinates to postal code. |
