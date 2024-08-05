import os
import requests
import json

NOTION_TOKEN = os.environ['NOTION_TOKEN']
DATABASE_ID = os.environ['NOTION_DATABASE_ID']

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

def get_latest_page():
    url = f"https://api.notion.com/v1/databases/{DATABASE_ID}/query"
    payload = {
        "sorts": [
            {
                "property": "Created time",
                "direction": "descending"
            }
        ],
        "page_size": 1
    }
    print(f"Requesting URL: {url}")
    print(f"Headers: {json.dumps(headers, indent=2)}")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    
    response = requests.post(url, json=payload, headers=headers)
    print(f"Response status code: {response.status_code}")
    print(f"Response content: {response.text}")
    
    response.raise_for_status()
    data = response.json()
    
    if 'results' in data and data['results']:
        return data['results'][0]['url']
    return None

if __name__ == "__main__":
    try:
        latest_url = get_latest_page()
        if latest_url:
            print(f"Latest URL: {latest_url}")
        else:
            print("No results found")
    except Exception as e:
        print(f"An error occurred: {str(e)}")