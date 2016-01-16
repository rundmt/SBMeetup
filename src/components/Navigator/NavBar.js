

export const NavigationBarRouteMapper = {

LeftButton: function(route, navigator, index, navState) {
  if (index === 0) {
    return null;
  }

  var previousRoute = navState.routeStack[index - 1];
  return (
    <TouchableOpacity
      onPress={() => navigator.pop()}
      style={styles.navBarLeftButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        {previousRoute.title}
      </Text>
    </TouchableOpacity>
  );
},

RightButton: function(route, navigator, index, navState) {
  return (
    <TouchableOpacity
      onPress={() => navigator.push(newRandomRoute())}
      style={styles.navBarRightButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        Next
      </Text>
    </TouchableOpacity>
  );
},

Title: function(route, navigator, index, navState) {
  return (
    <Text style={[styles.navBarText, styles.navBarTitleText]}>
      {route.title}
    </Text>
  );
},

};
