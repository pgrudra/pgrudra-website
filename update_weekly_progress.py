import os
import requests
import re

NOTION_TOKEN = os.environ['NOTION_TOKEN']
DATABASE_ID = os.environ['NOTION_DATABASE_ID']

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28"
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
    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()  # Raise an exception for HTTP errors
    data = response.json()
    
    print(f"API Response: {data}")  # Log the entire response
    
    
    if 'results' in data and data['results']:
        return data['results'][0]['url']
    return None

def update_repo_file(file_path, new_url):
    with open(file_path, 'r') as file:
        content = file.read()

    # Use regex to find and replace the URL in the PrevWeekWrapper onClick prop
    updated_content = re.sub(
        r'(onClick\s*=\s*\(\)\s*=>\s*handleClick\s*\(\s*")[^"]+(")',
        f'\\1{new_url}\\2',
        content
    )

    with open(file_path, 'w') as file:
        file.write(updated_content)

if __name__ == "__main__":
    latest_url = get_latest_page()
    if latest_url:
        update_repo_file('src/app/page.tsx', latest_url)
        print(f"Updated with new URL: {latest_url}")
    else:
        print("No new pages found or error occurred.")