Lifecycle Component Mounting > Updating > Unmounting

componentDidMount = goi sau khi component xuat hien lan dau componentDidUpdate = goi sau moi lan component update componentWillUnmount = goi trc khi component bien mat => chi co trong class component = stateful component Trc phien ban 16.8, khi chua co hook, functional component chi dung de hien thi UI, ko co state => ten goi khac: stateless component

Ke tu phien ban 16.8, Hook ra doi Hook giup functional component co the su dung lifecycle tuong tu class component Hook chi co the su dung trong functional component!!!

1. State Hook Array destructoring: const array = [1,2]; const [a,b] = array; const [state, setState] = React.useState(initValue)

State hook cho phep quan ly state trong functional component. useState tra ve 1 mang gom 2 phần tử pt1: Giá trị của state pt2: Phương thức cập nhật lại state & re-render component

cách 1: setState(newValue) cách 2: setState((currentState) => newState)

2. Effect Hook React.useEffect(() => { // do sth }, [dependencies])

dependencies co 3 kieu truyen

- Ko truyen => Sẽ gọi function lần đầu tiên component xuất hiện và mỗi lần component re-render => componentDidUpdate + componentDidMount
- Truyen mang rong [] => sẽ gọi function lần đầu tiên component xuất hiện và có thể gọi trước khi component biến mất -> componentDidMount + componentWillUnmount
- Truyen mang co phan tu [a,b,c] => sẽ gọi function mỗi lần có phần tử thay đổi giá trị + lần đầu tiên component xuất hiện

3. Context Hook const context = React.useContext(ContextName)

- Giúp lấy giá trị trong context

4. Custom Hook Do Developer tự viết

5. Memo Hook const cachedValue = React.useMemo(calculateValue, dependencies) Cache Giá trị

6. Callback Hook const cachedFn = useCallback(fn, dependencies) Cache Function

7. Reducer Hook const [state, dispatch] = useReducer(reducer, initialArg, init?)

- Dùng quản lý state phức tạp
- reducer: function nhận vào action + state hiện tại => trả về state mới
- dispatch: là phương thức để gửi action

Bài tập: Dùng useReducer để thêm và xoá phần tử trong 1 list ul>li

reducer là 1 function nhận vào 1 action và giá trị của state hiện tại sau đó trả ra giá trị state mới


DEPLOY:

Prepare

- Push Source code to github
- Create AWS EC2 Instance and Open connection
- Install nvm, git, nginx, pm2, json-server

* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
* sudo yum install git

* sudo yum install nginx

* npm install pm2@latest -g

* npm install json-server -g

- start nginx: sudo service nginx start
- open url to check nginx
- Pull code from github

Deploy Backend

- cd to folder source code
- npm install
- pm2 start "npm run server" --name json-server
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- add: location /api/ {
  proxy_pass http://localhost:3004/;
  }
- restart nginx: sudo service nginx restart
- verify api

Deploy Frontend

- update endpoint api, commit code to github
- connect to ec2, pull code from github
- Pull code from github
- cd to folder source code
- npm install
- npm run build
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- update: root /home/ec2-user/react-75/build;
  index index.html index.htm;
- add: location / {
    try_files $uri $uri/ /index.html;
  }
- grant permission to access folder code: sudo chmod 755 /home/ec2-user
- restart nginx: sudo service nginx restart
- verify frontend
