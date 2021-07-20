# sonos_api Bot

This branch is a Discord bot that runs some of the code in the main branch. Feel free to run it on your system.

## NPM Dependencies

[node-fetch](https://www.npmjs.com/package/node-fetch)

## Other Dependencies
- A [Sonos API Control Integration](https://integration.sonos.com/integrations)
  - Put your Key and Secret in the ```config.json``` file
- https://ovlic.com/sonos_api (For first time setup to generate a code for access_token)
    - If you plan to use this link, be sure to set https://ovlic.com/sonos_api as the redirect URI in your Control Integration credentials page.
- A Discord Bot Token
    - Put the token in the ```config.json``` file

## Setup
1. After you put your key and secret in ```config.json``` , go to https://ovlic.com/sonos_api, fill out the info
2. After the website redirects you to Sonos and back, copy the code in the URL. (it will look something like &code=abCDEfG1)
3. Run the ```get_access_token``` function with the code as a string argument. It should return a JSON like this:
```json
{
  access_token: '',
  token_type: 'Bearer',
  expires_in: 12345,
  refresh_token: '',
  scope: 'playback-control-all'
}
```
4. Put the access_token and the refresh_token in the ```config.json``` file. You should now be able to run the bot!