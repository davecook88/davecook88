# JSON Explorer Meta Attributes

The JSON explorer now supports meta attributes that allow for enhanced display and interaction with your data.

## Available Meta Attributes

### `_link`
Add a `_link` property to any object to make its string values clickable with a "cursor-pointer" style.

Example:
```json
{
  "name": "Project Website",
  "_link": "https://example.com"
}
```

In this example, the "Project Website" value will be displayed as a clickable link that opens in a new tab.

## Usage
When using the `JsonExplorer` component, simply include the meta attributes in your JSON data structure. The explorer will automatically recognize and apply the appropriate styling and behavior.

Note: Meta attributes (properties starting with `_`) are filtered out from the display and only used for controlling the rendering behavior.
