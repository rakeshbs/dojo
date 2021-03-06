# Spaces-iOS API DOC
* ## Spaces list API

	#### Request

	Request to list all the Spaces

	```http
	GET /api/spaces/list
	```

	#### Response

	Returns a JSON response in the following format:

	`HTTP status: 200 OK`

	```javascript
    {
      "spaces": [
        {
          "id": "uuid of space"
          "title": "Nike Running",
          "description": {
            "type": "Project",
            "count": 14
          },
          "faceThumbs": [
            {
              "name": "Jikku",
              "image": "s3 url"
            },
            {
              "name": "Jibin",
              "image": "s3 url"
            },
            {
              "name": "Rakesh",
              "image": "s3 url"
            }
          ],
          "bgImage": "s3 url",
          "icon": "s3 url",
        }
      ]
    }
	```

	The returned object have `spaces` attribute which is an array of object(s) where each object is a space and contains the following attributes


	| Attribute | Description |
	| :--- | :--- |
	| id | `uuid of space` |
	| title | `Name of the space` |
	| description | `An object with type of the space and the count` |
	| faceThumbs | `Array of object(s) with name and image url` |
	| bgImage | `Background image url` |
	| icon | `icon image url` |


* ## Space retrieve API

	#### Request

	Request to list a space

	```http
	GET /api/spaces/list/<space_UUID>
	```

	#### Response

	Returns a JSON response in the following format:

	`HTTP status: 200 OK`

	```javascript
	{
	  "id": "uuid of space",
	  "prototypes": 12,
	  "boards": 2,
	  "projects": [
	    {
	      "id": "uuid of project",
	      "title": "Nike+ Training Club",
	      "bgImage": "s3 url",
	      "icon": "s3 url",
	      "star": true,
	      "description": {
	        "type": "Screen",
	        "count": 32
	      }
	   }
	 ]
	}
	```

	| Attribute | Description |
	| :--- | :--- |
	| id | `uuid of space` |
	| prototypes | `count of prototypes` |
	| boards | `count of boards` |

	The returned object have `projects` attribute which is an array of object(s) where each object is a project under the space and contains following attributes


	| Attribute | Description |
	| :--- | :--- |
	| id | `uuid of project` |
	| title | `Name of the Project` |
	| bgImage | `Background image url of project` |
	| icon | `icon image url of project` |
	| star | `true or false boolean response` |
	| description | `An object with type of the project and the count` |